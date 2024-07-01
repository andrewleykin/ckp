<template>
  <div class="ui-layout">
    <aside class="sidebar">
      <div class="logo">
        <ui-icon
          name="logo"
          width="262px"
          height="91px"
        />
      </div>

      <div class="menu">
        <router-link
          v-for="menuItem in menuList"
          :key="menuItem.link"
          :to="{ name: menuItem.link }"
          class="menu-item"
        >
          <ui-typography
            variant="Body3"
            color="gray"
            class="menu-item__content"
          >
            <ui-icon
              color="gray"
              :name="menuItem.icon"
            />
            {{ menuItem.text }}
          </ui-typography>
        </router-link>

        <router-link
          :to="{ name: RouteName.TERMS }"
          class="menu-item offer-terms"
        >
          <ui-typography
            variant="Body3"
            color="gray"
            class="menu-item__content"
          >
            Договор оферты
          </ui-typography>
        </router-link>
      </div>
    </aside>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/shared/config';
import type { UiIconNames } from '@/shared/ui/ui-icon';
import { UiIcon } from '@/shared/ui/ui-icon';
import { UiTypography } from '@/shared/ui/ui-typography';

const menuList: { text: string; link: RouteName; icon: UiIconNames }[] = [
  {
    text: 'Регистрация SIM карт',
    link: RouteName.REGISTRATION,
    icon: 'document-bullet-list',
  },
  {
    text: 'Замена SIM карт',
    link: RouteName.REPLACE,
    icon: 'arrow-repeat-all',
  },
  {
    text: 'Блокировка SIM карт',
    link: RouteName.BLOCK,
    icon: 'lock',
  },
  {
    text: 'Оплата SIM карт',
    link: RouteName.PAYMENT,
    icon: 'wallet-credit-card',
  },
];
</script>

<style lang="scss" scoped>
.ui-layout {
  display: flex;
  height: 100%;
}

.sidebar {
  border-right: 1px solid var(--divider-gray);
  min-width: 320px;
  display: flex;
  flex-direction: column;

  .logo {
    border-bottom: 1px solid var(--divider-gray);
    padding: 24px;
  }

  .menu {
    flex: auto;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .menu-item {
      text-decoration: none;
      border-radius: 6px;
      --text-color: var(--text-gray);

      &:hover {
        --text-color: var(--text-black);
      }

      &.router-link-active {
        --text-color: var(--text-black);
        background-color: var(--button-middle-gray);
      }
    }

    .menu-item__content {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 51px;
      padding: 0 16px;
      cursor: pointer;
      color: var(--text-color);

      :deep(.ui-icon) {
        fill: var(--text-color);
      }
    }

    .offer-terms {
      margin-top: auto;
    }
  }
}

.content {
  flex: auto;
  & > :deep(main) {
    padding: 32px 54px;
    background-color: var(--background-gray);
    height: 100%;
  }
}
</style>
