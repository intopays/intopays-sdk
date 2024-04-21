## Como usar
```shell
npm install intopays
```

```shell
bun install intopays
```
## Documentaçāo

- [Webhook](#webhook)
  - [Webhook Signature](#webhook-signature)
  - [Criar Webhook](#criar-webhook)
  - [Listar Webhooks](#listar-webhooks)
  - [Pesquisar Webhooks](#pesquisar-webhooks)
  - [Excluir Webhook](#excluir-webhook)

## Webhook

## Verificação da Assinatura do Webhook

Este SDK fornece uma maneira simples de verificar a assinatura de um webhook recebido. Você pode usar a função `verifySignature` do objeto `intopays.webhooks` para verificar se a assinatura do webhook é válida.

#### Webhook Signature:
##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();
const xWebhookSignature = request.headers["x-webhook-signature"];
const signature = "c1a4b404-ac83-4378-b60f-9be9bac1fc80";
const isValid = intopays.webhooks.verifySignature(request.body, xWebhookSignature, signature);

if (isValid) {
    console.log("Assinatura do webhook válida");
} else {
    console.log("Assinatura do webhook inválida");
}
```

#### Parâmetros:

- `request.body`: O corpo do webhook recebido.
- `xWebhookSignature`: A assinatura recebida nos cabeçalhos do webhook.
- `signature`: A assinatura esperada para verificar a validade.

#### Retorno:

- `true`: Se a assinatura do webhook for válida.
- `false`: Se a assinatura do webhook for inválida.

Certifique-se de substituir "c1a4b404-ac83-4378-b60f-9be9bac1fc80" pela sua própria chave de assinatura.


## Criar Webhook

Você pode criar um webhook usando a função `create` do objeto `intopays.webhooks`.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();
const payload = {
  endpoint: "https://exemple.intopays.com/webhooks"
};

try {
  const response = await intopays.webhooks.create(payload);
  console.log("Webhook criado com sucesso:", response);
} catch (error) {
  console.error("Erro ao criar webhook:", error);
}

```

#### Parâmetros:

- `payload.endpoint`: Endpoint responsável por receber eventos via webhook.

#### Retorno:

- `Webhook`: Objeto que representa um webhook.

## Listar Webhooks

Você pode listar todos os webhooks registrados usando a função `find` do objeto `intopays.webhooks`.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const response = await intopays.webhooks.find();
  console.log("Webhooks encontrados:", response);
} catch (error) {
  console.error("Erro ao listar webhooks:", error);
}
```

#### Retorno:

- `Array<Webhook>`: Lista de objetos que representam webhooks.

## Pesquisar Webhooks

Você também pode pesquisar webhooks por endpoint usando a função `find` do objeto `intopays.webhooks`.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();
const endpoint = "https://exemple.intopays.com/webhooks";

try {
  const response = await intopays.webhooks.find({ endpoint });
  console.log("Webhooks encontrados com o endpoint especificado:", response);
} catch (error) {
  console.error("Erro ao pesquisar webhooks:", error);
}
```

#### Parâmetros:

- `endpoint`: Endpoint a ser especificado durante a consulta..

#### Retorno:

- `Array<Webhook>`: Lista de objetos que representam webhooks.

## Excluir Webhooks

Você pode excluir um webhook usando a função `delete` do objeto `intopays.webhooks`.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const webhookId = 0;
  const response = await intopays.webhooks.delete(webhookId);
  console.log("Webhook excluído com sucesso:", response);
} catch (error) {
  console.error("Erro ao excluir webhook:", error);
}
```

#### Parâmetros:

- `webhookId`: ID do webhook a ser deletado.

#### Retorno:

- `void`: Sem retorno após a exclusão do webhook