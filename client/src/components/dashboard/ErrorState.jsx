import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/30">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
        <FaExclamationTriangle className="text-xl text-red-600" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-midnight-text">
        Analysis Failed
      </h3>
      <p className="mt-2 text-sm text-slate-600">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          <FaRedo className="text-xs" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
