# INTOPAYS SDK

Para mais informações, visite nosso site: [Intopays](https://intopays.com)

## Contato 
<p>
 <a href="https://wa.me/5511997649421" target="_blank">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" title="+55 11 99764-9421"/>
 </a>
<a href="https://www.linkedin.com/in/lucasscode" target="_blank">
 <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
</a>  
</p>

## Como usar
```shell
npm install intopays
```

```shell
bun install intopays
```

## Inicialização

Você pode inicializar a SDK da seguinte maneira:

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays({
  token: String(environment.test.TOKEN),
  mode: "production"
});

```
#### Parâmetros:

- `token`: (string): Token de autenticação fornecido pela Intopays.
- `mode`: (string): Ambiente da aplicação. Pode ser:
  - `production`: Ambiente de produção.
  - `development`: Ambiente de testes.

#### Retorno:

- `IntopaysInstance`: Objeto Intopays com acesso às funcionalidades do SDK, como pix, webhooks, etc.


## Documentaçāo
- [Pix](#pix)
  - [Criar Pix](#criar-pix)
  - [Encontrar Pix](#encontrar-pix)
  - [Pesquisar Pix](#pesquisar-pix)
- [Boleto](#boleto)
  - [Criar Boleto](#criar-boleto)
  - [Encontrar Boleto](#encontrar-boleto)
  - [Pesquisar Boleto](#pesquisar-boleto)
  - [Cancelar Boleto](#cancelar-boleto)
- [Webhook](#webhook)
  - [Criar Webhook](#criar-webhook)
  - [Listar Webhooks](#listar-webhooks)
  - [Pesquisar Webhooks](#pesquisar-webhooks)
  - [Excluir Webhooks](#excluir-webhooks)
  - [Webhook Signature](#webhook-signature)
  - [Recebimento de Evento de Boleto via Webhook](#recebimento-de-evento-de-boleto-via-webhook)
  - [Recebimento de Evento PIX via Webhook](#recebimento-de-evento-pix-via-webhook)

## Pix

## Criar pix

Você pode criar cobranças Pix utilizando o SDK de forma simples. para bancos `Sicredi`, `Sicoob`, `Santander`, `Banco do Brasil` enter outros.

##### Exemplo de Uso

```javascript
import { Intopays, IntegrationEnum } from "intopays";

const intopays = new Intopays();
const payload = {
  calendarExpiration: 86400,
  debtorName: "Lucas Lopes",
  debtorDocument: "12345678901",
  amountOriginal: "10.99",
  amountModificationType: 0,
  payerRequest: "Cobrança de serviço",
  additionalInfos: [
    {
      name: "Campo 1",
      value: "Informação Adicional do PSP-Recebedor"
    }
  ],
  integrationType: IntegrationEnum.SICOOB
};

try {
  const response = await intopays.pix.create(payload);
  console.log("Pix gerado com sucesso:", response);
} catch (error) {
  console.error("Erro ao gerar Pix:", error);
}
```

#### Parâmetros:

- `amount`: Valor da cobrança em reais.
- `debtorName`: Nome do pagador.
- `debtorDocument`: CPF/CNPJ do pagador.
- `payerRequest`: Descrição da cobrança.
- `calendarExpiration`: Tempo em segundos para expirar

#### Retorno:

- `Pix`: Objeto com os dados da cobrança `Pix`, incluindo `qrcode`, `location`, `status` e `url`.


## Encontrar Pix

Você pode encontrar um Pix existente usando o ID de pagamento.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();
const pixId = 123;

try {
  const response = await intopays.pix.find(pixId);
  console.log("Pix encontrado:", response);
} catch (error) {
  console.error("Erro ao encontrar Pix:", error);
}
```

#### Parâmetros:

- `pixId`: ID do Pix gerado anteriormente.

#### Retorno:

- `Pix`: Objeto com os dados da cobrança `Pix`, incluindo `qrcode`, `location`, `status` e `url`.

## Pesquisar Pix

Você pode pesquisar um Pix por CPF/CNPJ, status ou data.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const response = await intopays.pix.search({
    debtorDocument: "12345678901",
    status: "ACTIVE"
  });
  console.log("Resultados da pesquisa:", response);
} catch (error) {
  console.error("Erro ao pesquisar Pix:", error);
}
```

#### Parâmetros:

- `debtorDocument`: (opcional): CPF ou CNPJ do pagador.
- `status`: (opcional): Status da cobrança (ex: ACTIVE, COMPLETED).

#### Retorno:

- `Pix`: Lista de cobranças Pix que atendem aos critérios. Objeto com os dados da cobrança `Pix`, incluindo `qrcode`, `location`, `status` e `url`.

## Boleto

## Criar boleto

Você pode criar boletos utilizando o SDK, com opções de `integração` com bancos como `Banco do Brasil`, `Bradesco`, `Itaú`, entre outros.

##### Exemplo de Uso

```javascript
import { Intopays, StateEnum, DiscountEnum, InterestEnum, FineTypeEnum, IntegrationEnum } from "intopays";

const intopays = new Intopays();

// Criação de um boleto
const boleto = new Boleto({
amount: 2.51,
  dueDate: new Date(),
  daysAfterDueDateForCancellation: 30,
  payerDocument: "000.000.000-00",
  payerName: "Luffrs",
  payerEmail: "email@intoapys.com",
  payerPhone: "51999999999",
  payerZipCode: "91760110",
  payerNumber: "123",
  payerComplement: "Apto 123",
  payerNeighborhood: "Centro",
  payerCity: "Salto",
  payerState: StateEnum.AC,
  payerAddress: "Rua Principal",
  messageLine1: "Message line 1",
  messageLine2: "Message line 2",
  discount1Code: DiscountEnum.NO_DISCOUNT,
  discount1Rate: 0,
  discount1Value: 0,
  discount1Date: new Date(),
  discount2Code: DiscountEnum.NO_DISCOUNT,
  discount2Rate: 0,
  discount2Value: 10,
  discount2Date: new Date(),
  fineCode: FineTypeEnum.NO_FINE,
  fineDate: null,
  fineValue: 0,
  fineRate: 0,
  interestCode: InterestEnum.EXEMPT,
  interestDate: null,
  interestRate: 0,
  interestValue: 0,
  finalBeneficiaryName: "Final Beneficiary",
  finalBeneficiaryDocument: "111.111.111-11",
  finalBeneficiaryZipCode: "98765432",
  finalBeneficiaryAddress: "Rua Final",
  finalBeneficiaryNeighborhood: "Bairro Final",
  finalBeneficiaryCity: "Final City", 
  finalBeneficiaryState: StateEnum.AC,
  integrationType: IntegrationEnum.SICOOB
});

// Envio do boleto para a criação
try {
  const response = await intopays.boleto.create(boleto);
  console.log("Boleto gerado com sucesso:", response);
} catch (error) {
  console.error("Erro ao gerar Boleto:", error);
}
```

#### Parâmetros:

- `amount`: O valor do boleto (em reais).
- `dueDate`: A data de vencimento do boleto.
- `daysAfterDueDateForCancellation`: Número de dias após o vencimento para cancelamento do boleto.
- `payerDocument`: O CPF ou CNPJ do pagador.
- `payerName`: Nome do pagador.
- `payerEmail`: E-mail do pagador.
- `payerPhone`: Telefone do pagador.
- `payerZipCode`: CEP do pagador.
- `payerNumber`: Número do endereço do pagador.
- `payerComplement`: Complemento do endereço do pagador.
- `payerNeighborhood`: Bairro do pagador.
- `payerCity`: Cidade do pagador.
- `payerState`: Estado do pagador (use o enum StateEnum para escolher).
- `payerAddress`: Endereço do pagador.
- `messageLine1`: Mensagem personalizada (linha 1).
- `messageLine2`: Mensagem personalizada (linha 2).
- `discount1Code`: Código do desconto 1 (use o enum DiscountEnum para escolher).
- `discount1Rate`: Taxa de desconto 1.
- `discount1Value`: Valor do desconto 1.
- `discount1Date`: Data do desconto 1.
- `discount2Code`: Código do desconto 2 (use o enum DiscountEnum para escolher).
- `discount2Rate`: Taxa de desconto 2.
- `discount2Value`: Valor do desconto 2.
- `discount2Date`: Data do desconto 2.
- `fineCode`: Código de multa (use o enum FineTypeEnum para escolher).
- `fineDate`: Data da multa.
- `fineValue`: Valor da multa.
- `fineRate`: Taxa da multa.
- `interestCode`: Código de juros (use o enum InterestEnum para escolher).
- `interestDate`: Data dos juros.
- `interestRate`: Taxa de juros.
- `interestValue`: Valor dos juros.
- `finalBeneficiaryName`: Nome do beneficiário final.
- `finalBeneficiaryDocument`: CPF ou CNPJ do beneficiário final.
- `finalBeneficiaryZipCode`: CEP do beneficiário final.
- `finalBeneficiaryAddress`: Endereço do beneficiário final.
- `finalBeneficiaryNeighborhood`: Bairro do beneficiário final.
- `finalBeneficiaryCity`: Cidade do beneficiário final.
- `finalBeneficiaryState`: Estado do beneficiário final (use o enum StateEnum para escolher).
- `integrationType`: Tipo de integração (use o enum IntegrationEnum para escolher).

#### Retorno:

`Boleto`: Objeto contendo os dados da cobrança do boleto, incluindo `barcode`, `boletoUrl`, `dueDate`, `amount`, `status`, entre outros.

## Encontrar Boleto

Você pode encontrar um boleto específico utilizando seu ID com o SDK de forma simples.

##### Exemplo de Uso
```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const response = await intopays.boleto.find(123);
  console.log("Boleto encontrado:", response);
} catch (error) {
  console.error("Erro ao encontrar boleto:", error);
}
```

#### Parâmetros:
- `id`: ID do boleto que será encontrado. Este ID é retornado ao criar o boleto.

#### Retorno:
- `Boleto`: Objeto contendo os dados do boleto, como id, amount, dueDate, status e outros detalhes relacionados.

## Cancelar Boleto

Você pode cancelar uma cobrança de boleto utilizando o SDK de forma simples.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const response = await intopays.boleto.void(123);
  console.log("Boleto cancelado com sucesso:", response);
} catch (error) {
  console.error("Erro ao cancelar boleto:", error);
}
```

#### Parâmetros:

- `id`: ID do boleto que será cancelado. Este ID é retornado ao criar o boleto.

#### Retorno:

- `Boleto`: Objeto com a confirmação do cancelamento do boleto, incluindo o status da operação e a mensagem de sucesso ou erro.

## Pesquisar Boleto

Você pode pesquisar boletos com base em diferentes critérios usando o SDK de forma simples.

##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();

try {
  const response = await intopays.boleto.search({
  payerName: "Luffrs",
  dueDate: "2025-05-01"
});
  console.log("Boletos encontrados:", response);
} catch (error) {
  console.error("Erro ao pesquisar boletos:", error);
}

```

#### Parâmetros:
- `payerName`: Nome do pagador (opcional).
- `dueDate`: Data de vencimento do boleto (opcional).
- `status`: Status do boleto, como "PENDENTE", "PAGO", etc. (opcional).

#### Retorno:
- `Array<Boleto>`: Lista de objetos que representam os boletos encontrados com os critérios de pesquisa. Cada objeto de boleto pode incluir informações como `id`, `amount`, `dueDate`, `payerName`, `status`, entre outros detalhes.

## Webhook

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
  const response = await intopays.webhook.create(payload);
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
  const response = await intopays.webhook.find();
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
  const response = await intopays.webhook.find({ endpoint });
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
  const response = await intopays.webhook.delete(webhookId);
  console.log("Webhook excluído com sucesso:", response);
} catch (error) {
  console.error("Erro ao excluir webhook:", error);
}
```

#### Parâmetros:

- `webhookId`: ID do webhook a ser deletado.

#### Retorno:

- `void`: Sem retorno após a exclusão do webhook


## Verificação da Assinatura do Webhook

Este SDK fornece uma maneira simples de verificar a assinatura de um webhook recebido. Você pode usar a função `verifySignature` do objeto `intopays.webhooks` para verificar se a assinatura do webhook é válida.

#### Webhook Signature:
##### Exemplo de Uso

```javascript
import { Intopays } from "intopays";

const intopays = new Intopays();
const xWebhookSignature = request.headers["x-webhook-signature"];
const signature = "c1a4b404-ac83-4378-b60f-9be9bac1fc80";
const isValid = intopays.webhook.verifySignature(request.body, xWebhookSignature, signature);

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


### Recebimento de Evento de Boleto via Webhook

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

### Recebimento de Evento PIX via Webhook

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
