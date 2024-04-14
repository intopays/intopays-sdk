## How to use
```shell
npm install intopays
```

```shell
bun install intopays
```
## Documentaçāo

- [Webhook](#webhook)
  - [Webhook Signature](#webhook-signature)

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
