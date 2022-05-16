import { Link } from 'react-router-dom';

export const AddProfile = () => {
  return (
      <>
      <div class="m-4 inline-block text-center text-slate-600 hover:text-white">
        <Link
          to=""
          className="mt-2 transition-colors"
          >
          <p class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </p>
          Agregar perfíl
        </Link>
      </div>
      </>
  );
};
