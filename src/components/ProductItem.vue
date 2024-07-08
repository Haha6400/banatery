<template>
  <div class="item">
    <div class="details">
    <i>
      <slot name="icon"></slot>
    </i>
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  font-size: 24px;
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  width: 32px;
  height: 32px;

  color: var(--color-text-primary);
}

h3 {
  font-weight: 500;
  color: var(--color-text-3);
}

@media {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 4);
  }

  i {
    top: calc(50% - 25px);
    left: 0px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
