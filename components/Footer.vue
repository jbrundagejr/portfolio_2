<template>
  <ul id="footer">
    <li>
      <a
        href="https://www.linkedin.com/in/jbrundagejr/"
        target="_blank"
        rel="noreferrer"
      >
        <svg role="img" aria-label="LinkedIn Profile">
          <use href="/sprites/socialSprites.svg#linkedIn" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://medium.com/@jbrundagejr"
        target="_blank"
        rel="noreferrer"
      >
        <svg role="img" aria-label="Medium Profile">
          <use href="/sprites/socialSprites.svg#medium" />
        </svg>
      </a>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped>
#footer {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-end;
}

svg {
  height: 48px;
  width: 48px;
  padding: 0;
}
</style>
