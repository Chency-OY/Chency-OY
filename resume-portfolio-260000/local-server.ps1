param(
    [string]$RootDir = (Get-Location),
    [int]$Port = 8080
)

Write-Host "Root dir: $RootDir"
Write-Host "Listening on: http://localhost:$Port"
Write-Host "Press Ctrl+C to stop.`n"

$listener = New-Object System.Net.Sockets.TcpListener([Net.IPAddress]::Any, $Port)
$listener.Start()

function Get-MimeType($path) {
    switch ([IO.Path]::GetExtension($path).ToLower()) {
        ".html" { "text/html; charset=utf-8" }
        ".htm"  { "text/html; charset=utf-8" }
        ".js"   { "text/javascript; charset=utf-8" }
        ".mjs"  { "text/javascript; charset=utf-8" }
        ".css"  { "text/css; charset=utf-8" }
        ".json" { "application/json; charset=utf-8" }
        ".png"  { "image/png" }
        ".jpg"  { "image/jpeg" }
        ".jpeg" { "image/jpeg" }
        ".gif"  { "image/gif" }
        ".svg"  { "image/svg+xml" }
        ".ico"  { "image/x-icon" }
        ".woff" { "font/woff" }
        ".woff2"{ "font/woff2" }
        ".ttf"  { "font/ttf" }
        default { "application/octet-stream" }
    }
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
    } catch {
        break
    }

    $stream = $client.GetStream()
    $reader = New-Object IO.StreamReader($stream)
    $requestLine = $reader.ReadLine()

    if ($requestLine -match "GET (.+?) ") {
        $path = $matches[1]
        if ($path -eq "/") { $path = "/index.html" }

        $safe = $path -replace "\.\.", ""
        $localPath = Join-Path $RootDir $safe.TrimStart("/")

        if (Test-Path $localPath) {
            $bytes = [IO.File]::ReadAllBytes($localPath)
            $mime = Get-MimeType $localPath
            $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`n`r`n"
            $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $msg = "404 Not Found"
            $header = "HTTP/1.1 404 Not Found`r`nContent-Length: $($msg.Length)`r`n`r`n$msg"
            $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
        }
    }

    $stream.Close()
    $client.Close()
}

$listener.Stop()

