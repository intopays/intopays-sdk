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
  - [Excluir Webhooks](#excluir-webhooks)
  - [Recebimento de Evento de Boleto via Webhook](#recebimento-de-evento-de-boleto-via-webhook)
  - [Recebimento de Evento PIX via Webhook](#recebimento-de-evento-pix-via-webhook)

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


## Recebimento de Evento de Boleto via Webhook

```json
{
  "type": "BOLETO",
  "boleto": {
    "id": 22,
    "amount": 120,
    "dueDate": "2024-07-20T00:00:00.000Z",
    "daysAfterDueDateForCancellation": 30,
    "payerDocument": "12345678910",
    "payerName": "Cliente Exemplo",
    "payerEmail": "cliente@example.com",
    "payerPhone": "(11) 98765-4321",
    "payerZipCode": "12345-678",
    "payerNumber": "123",
    "payerComplement": "Sala 101",
    "payerNeighborhood": "Centro",
    "payerCity": "São Paulo",
    "payerState": "SP",
    "payerAddress": "Rua Exemplo, 123",
    "messageLine1": "Mensagem opcional",
    "messageLine2": "Outra mensagem opcional",
    "discount1Code": "NO_DISCOUNT",
    "discount1Rate": 0,
    "discount1Value": 0,
    "discount1Date": null,
    "discount2Code": "NO_DISCOUNT",
    "discount2Rate": 0,
    "discount2Value": 0,
    "discount2Date": null,
    "fineCode": "NO_FINE",
    "fineDate": null,
    "fineRate": 0,
    "fineValue": 0,
    "interestCode": "EXEMPT",
    "interestDate": null,
    "interestRate": 0,
    "interestValue": 0,
    "finalBeneficiaryName": null,
    "finalBeneficiaryDocument": null,
    "finalBeneficiaryZipCode": null,
    "finalBeneficiaryAddress": null,
    "finalBeneficiaryNeighborhood": null,
    "finalBeneficiaryCity": null,
    "finalBeneficiaryState": null,
    "status": "OPEN",
    "barcode": "12345678901234567890123456789012345678901234",
    "digitableLine": "1234567890123456789012345678901212345678901234",
    "qrcode": "EXAMPLE_QRCODE_STRING",
    "referenceCode": "EXAMPLE_REFERENCE_CODE",
    "integrationBankingCode": 123456,
    "integrationType": "SICOOB",
    "createdAt": "2024-07-01T10:00:00.000Z",
    "updatedAt": "2024-07-01T10:00:00.000Z"
  },
  "updatedAt": "2024-07-01T10:00:00.000Z",
  "integrationError": null,
  "id": 23,
  "createdAt": "2024-07-01T10:00:00.000Z"
}

```

## Recebimento de Evento PIX via Webhook

```json
{
  "type": "PIX",
  "pix": {
    "id": 27,
    "transactionId": "YYYINTOPAYSYYYSICOOBYYYPIXXXXXXXXX27",
    "transactionEndId": null,
    "calendarCreation": "2024-08-20T10:30:45.789Z",
    "calendarExpiration": 86400,
    "revision": null,
    "locId": null,
    "locLocation": null,
    "locType": null,
    "location": "pix.sicoob.com.br/qr/payload/v2/3e9b2c6f-85cd-4fc4-9123-20d5434c38f9",
    "status": "ACTIVE",
    "debtorName": "Cliente Exemplo",
    "debtorDocument": "12345678910",
    "amountOriginal": 100.99,
    "amountModificationType": 0,
    "pixKey": "98765432-1234-5678-90ab-cdef12345678",
    "qrcode": "00020101021226900014br.gov.bcb.pix2568pix.sicoob.com.br/qr/payload/v2/3e9b2c6f-85cd-4fc4-9123-20d5434c38f905204000053039865802BR5923Cliente Exemplo6013Nao_informado62070503***63048315",
    "url": "https://app.intopays.com/v1/pix-payment/YYYINTOPAYSYYYSICOOBYYYPIXXXXXXXXX27",
    "payerRequest": "Pagamento do serviço",
    "integrationType": "SICOOB",
    "createdAt": "2024-08-20T10:30:43.214Z",
    "updatedAt": "2024-08-20T10:30:45.821Z",
    "additionalInfos": []
  },
  "updatedAt": "2024-08-20T10:30:45.874Z",
  "integrationError": null,
  "id": 33,
  "createdAt": "2024-08-20T10:30:45.878Z"
}
```