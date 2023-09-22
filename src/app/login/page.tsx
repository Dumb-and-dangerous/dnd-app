import LoginForm from '@/components/common/forms/login';
import { LoginInputs } from '@/components/common/forms/login/types';

export default function Login() {
  // TO-DO: Remove this when full integrated
  function handleOnSubmit(values: LoginInputs) {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LoginForm onSubmit={handleOnSubmit} />
    </main>
  );
}
