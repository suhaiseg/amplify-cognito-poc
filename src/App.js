/*
import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';

const ptBrDict = {
  'Sign Up': 'Cadastrar',
  'Sign In': 'Entrar',
  'Sign Out': 'Sair',
  'Sign in to your account': 'Entre com a sua conta',
  'Username': 'Usuário',
  'Password': 'Senha',
  'Enter your username': 'Digite seu usuário',
  'Enter your password': 'Digite sua senha',
  'No account?': 'Não tem conta?',
  'Create account': 'Criar uma conta',
  'Forgot your password?': 'Esqueceu a senha? - Primeiro Acesso',
  'Reset password': 'Redefinir senha',
  'User does not exist': 'Usuário não existe',
  'User already exists': 'Usuário já existe',
  'Incorrect username or password': 'Usuário ou senha incorretos',
  'Invalid password format': 'Formato de senha inválido',
  'Welcome': 'Bem-vindo',
  'Welcome back': 'Bem-vindo de volta',
  'Hello': 'Olá',
  'Thank you': 'Obrigado',
  'Create Account': 'Criar Conta',
  'Confirm Password': 'Confirmar Senha',
  'Reset your password': 'Redefina a sua senha'
  // ... adicione mais strings conforme necessário
};

I18n.putVocabularies({ 'pt-BR': ptBrDict });
I18n.setLanguage('pt-BR');

const logoUrl = 'https://suhaiseguradora.com/wp-content/uploads/2022/06/LOGO-SUHAI-NOVO.png';



function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logoUrl} alt="Company Logo" style={{ width: '150px', margin: '0 auto' }} />
          </header>
          <p>
            Bem-vindo, {user.username}!
          </p>
          <button onClick={signOut}>Sair</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
*/

import React from 'react';
import './App.css';

import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { Button, Heading, View, Image, Text } from '@aws-amplify/ui-react';
import { Authenticator, useAuthenticator, useTheme } from '@aws-amplify/ui-react';


const ptBrDict = {
  'Sign Up': 'Cadastrar',
  'Sign In': 'Entrar',
  'Sign Out': 'Sair',
  'Sign in to your account': 'Entre com a sua conta',
  'Username': 'Usuário',
  'Password': 'Senha',
  'Enter your username': 'Digite seu usuário',
  'Enter your password': 'Digite sua senha',
  'No account?': 'Não tem conta?',
  'Create account': 'Criar uma conta',
  'Forgot your password?': 'Esqueceu a senha? - Primeiro Acesso',
  'Reset Password': 'Redefinir senha',
  'User does not exist': 'Usuário não existe',
  'User already exists': 'Usuário já existe',
  'Incorrect username or password': 'Usuário ou senha incorretos',
  'Invalid password format': 'Formato de senha inválido',
  'Welcome': 'Bem-vindo',
  'Welcome back': 'Bem-vindo de volta',
  'Hello': 'Olá',
  'Thank you': 'Obrigado',
  'Create Account': 'Criar Conta',
  'Confirm Password': 'Confirmar Senha',
  'Reset your Password': 'Redefina a sua senha',
  'Enter your email': 'Digite seu email'
  // ... adicione mais strings conforme necessário
};

I18n.putVocabularies({ 'pt-BR': ptBrDict });
I18n.setLanguage('pt-BR');

const logoUrl = 'https://suhaiseguradora.com/wp-content/uploads/2022/06/LOGO-SUHAI-NOVO.png';



const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src={logoUrl}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Todos os direitos reservados
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a sua conta
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Esqueceu sua senha? Primeiro Acesso
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Crie uma nova conta
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Volte para o Log in
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a informação:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a informação:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a informação:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a informação:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Entre com a informação:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Digite seu e-mail:',
    },
  },
  signUp: {
    password: {
      label: 'Senha:',
      placeholder: 'Entre com sua senha:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirme sua Senha:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Entre com sua senha:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Entre com seu e-mail:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Digite o seu código de confirmação:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Digite sua senha:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Digite o seu código de confirmação:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Digite o seu código de confirmação:',
      isRequired: false,
    },
  },
};

export default function App() {
  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}
