<template>
  <ui-card class="info-card">
    <ul>
      <li>
        <ui-typography variant="Body5">
          Если с вашей сим картой возникнут проблемы, вы можете обратиться по телефону горячей линии<br />
          <ui-typography
            variant="Body4"
            component="span"
          >
            {{ DOMAIN_PHONE }}
          </ui-typography>
          либо через
          <ui-typography
            variant="Body4"
            component="span"
          >
            WhatsApp
          </ui-typography>
          по номеру
          <ui-typography
            variant="Body4"
            component="span"
          >
            {{ DOMAIN_WHATSAPP_PHONE }}.
          </ui-typography>
        </ui-typography>
      </li>
      <li>
        <ui-typography variant="Body5">
          Если вам нужны закрывающие документы, напишите свой запрос на почту
          <ui-typography
            variant="Body4"
            color="additional-blue"
            component="a"
            :href="`mailto:${DOMAIN_EMAIL}`"
          >
            {{ DOMAIN_EMAIL }}</ui-typography
          >, вложив в письмо платежный документ.
        </ui-typography>
      </li>
      <li>
        <ui-typography variant="Body5">
          За месяц до окончания срока оказания услуг, мы вышлем вам счет на следующий год.<br />При НЕ оплате, договор
          закроется автоматически.
        </ui-typography>
      </li>
    </ul>
  </ui-card>
</template>

<script setup lang="ts">
import { DOMAIN_EMAIL, DOMAIN_PHONE, DOMAIN_WHATSAPP_PHONE } from '@/shared/config';
import { UiCard } from '@/shared/ui/ui-card';
import { UiTypography } from '@/shared/ui/ui-typography';
</script>

<style lang="scss" scoped>
.info-card {
  max-width: 700px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      gap: 4px;
      &::before {
        flex: none;
        content: '';
        width: 14px;
        height: 14px;
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.62113 0H2.37893L2.62442 2.37155L0.621102 0.980383L0 2.01961L2.24878 3L7.40411e-08 3.98038L0.621102 5.01961L2.62443 3.62845L2.37893 6H3.62113L3.37564 3.62849L5.3789 5.01961L6 3.98038L3.75122 3L6 2.01961L5.3789 0.980383L3.37564 2.37151L3.62113 0Z' /%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
