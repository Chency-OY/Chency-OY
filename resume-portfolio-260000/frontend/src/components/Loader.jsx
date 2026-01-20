import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading, setIsLoading }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isLoading) {
      // 设置5秒超时
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        setShowError(true);
      }, 5000);
    }

    // 清除超时定时器
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <p className="text-gray-600">加载中...</p>
        {showError && (
          <p className="text-red-500 text-sm mt-2">
            加载超时，请稍后重试
          </p>
        )}
      </div>
    </div>
  );
};

export default Loader;