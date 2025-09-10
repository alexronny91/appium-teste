# Documentação de Configuração e Execução de Testes

## Pré-requisitos e Instalação do Ambiente

### Windows
- Instale o [Node.js](https://nodejs.org/) (versão 18 ou superior).
- Instale o [Java JDK 11+](https://adoptium.net/).
- Instale o [Appium Desktop](https://github.com/appium/appium-desktop/releases) ou via npm:
	```sh
	npm install -g appium
	```
- Instale o [Android Studio](https://developer.android.com/studio) e configure o Android SDK.
- Adicione as variáveis de ambiente `JAVA_HOME` e `ANDROID_HOME` e inclua `platform-tools` no `PATH`.

### Linux
- Instale o Node.js 18+ e o Java JDK 11+:
	```sh
	sudo apt update
	sudo apt install nodejs npm openjdk-17-jdk wget unzip
	```
- Instale o Appium:
	```sh
	npm install -g appium
	```
- Baixe e configure o Android SDK (pode usar o Android Studio ou baixar apenas o SDK Tools).
- Exporte as variáveis de ambiente `JAVA_HOME` e `ANDROID_HOME` e adicione `platform-tools` ao `PATH`.

### MacOS (para iOS)
- Instale o [Node.js](https://nodejs.org/) (versão 18 ou superior).
- Instale o [Java JDK 11+](https://adoptium.net/).
- Instale o Appium:
	```sh
	npm install -g appium
	```
- Instale o [Xcode](https://developer.apple.com/xcode/) e aceite a licença:
	```sh
	sudo xcode-select --switch /Applications/Xcode.app
	sudo xcodebuild -license accept
	```
- Instale o [Android Studio](https://developer.android.com/studio) se desejar rodar testes Android.
- Configure as variáveis de ambiente `JAVA_HOME`, `ANDROID_HOME` e inclua `platform-tools` no `PATH`.

---
## Download dos Apps de Demonstração

Antes de executar os testes, baixe os apps de demonstração oficiais do WebdriverIO:

- **Android APK:**
	[android.wdio.native.app.v1.0.8.apk](https://github.com/webdriverio/native-demo-app/releases/download/v1.0.8/android.wdio.native.app.v1.0.8.apk)
- **iOS (simulador):**
	[ios.simulator.wdio.native.app.v1.0.8.zip](https://github.com/webdriverio/native-demo-app/releases/download/v1.0.8/ios.simulator.wdio.native.app.v1.0.8.zip)

Após o download:

1. Coloque o arquivo APK em `apps/android/`.
2. Descompacte o arquivo `.zip` do iOS e coloque o `.app` resultante em `apps/ios/`.

O caminho dos arquivos deve ser:

- `apps/android/android.wdio.native.app.v1.0.8.apk`
- `apps/ios/wdiodemoapp.app`

Esses arquivos são necessários para a execução dos testes automatizados.


## Instalação do Projeto

1. Clone o repositório:
	```sh
	git clone <url-do-repositorio>
	cd appium-teste
	```
2. Instale as dependências:
	```sh
	npm install
	```

## Configuração do Ambiente

### Android
- Baixe e instale o Android SDK e crie um emulador compatível (API 30 recomendado).
- Ajuste o caminho do APK em `wdio.android.conf.js` na capability `appium:app`.

### iOS
- O código foi desenvolvido com base em um dispositivo android, serão necessários ajustes em alguns seletores para rodar os testes em um dispositivo iOS.
- Disponível apenas em MacOS.
- Instale o Xcode e aceite a licença:
  ```sh
  sudo xcode-select --switch /Applications/Xcode.app
  sudo xcodebuild -license accept
  ```
- Ajuste o caminho do app em `wdio.ios.conf.js` na capability `appium:app`.

## Execução dos Testes

### Android
1. Inicie o Appium:
	```sh
	appium
	```
2. Execute os testes:
	```sh
	npm run test:android
	# ou
	npx wdio run wdio.android.conf.js
	```

### iOS
1. Inicie o Appium:
	```sh
	appium
	```
2. Execute os testes:
	```sh
	npm run test:ios
	# ou
	npx wdio run wdio.ios.conf.js
	```

## Relatórios de Teste

Após a execução, gere e visualize o relatório Allure:

```sh
npm run allure:generate
npm run allure:open
```

## CI/CD

O projeto possui exemplo de pipeline para GitLab CI/CD no arquivo `.gitlab-ci.yml`, incluindo execução em emulador Android headless.

## Dicas
- Use seletores `accessibilityId` para maior compatibilidade entre Android e iOS.
- Consulte os arquivos de configuração para ajustar capabilities conforme seu ambiente.

---