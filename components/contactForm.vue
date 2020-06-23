<template>
  <div class="input-area">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label for="name">
        <font-awesome-icon :icon="['fas', 'user']" />
        <input name="name" type="text" required />
      </label>
      <label for="email">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <input name="email" type="text" required />
      </label>
      <label for="textarea">
        <font-awesome-icon :icon="['fas', 'comment']" />
        <textarea name="textarea" cols="30" rows="10"></textarea>
      </label>
      <button value="Send" type="submit">
        Send
        <font-awesome-icon :icon="['fas', 'paper-plane']" />
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.input-area {
  margin: 64px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  form {
    label {
      display: flex;
      margin-bottom: 16px;
      padding: 0.5px;
      border-radius: 25px;
      box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
        inset -6px -6px 10px rgb(245, 245, 245);
      width: 100%;
      box-sizing: border-box;
      transition: all 0.2s ease-in-out;
      appearance: none;
      -webkit-appearance: none;
      &:hover {
        box-shadow: -8px -8px 15px rgb(245, 245, 245),
          8px 8px 15px rgb(180, 180, 180);
      }
      input {
        width: 500px;
        height: 32px;
        border: none;
        &:focus {
          outline: none;
        }
        @media (max-width: (768px)) {
          width: 300px;
        }
      }
      textarea {
        width: 500px;
        border: none;
        padding-top: 6px;
        font-size: 18px;
        &:focus {
          outline: none;
        }
        @media (max-width: (768px)) {
          width: 300px;
        }
      }
      svg {
        font-size: 16px;
        margin: 8px;
      }
    }

    button {
      padding: 8px;
      width: 200px;
      background: #ddd;
      border-radius: 25px;
      font-weight: bold;
      box-shadow: -8px -8px 15px rgb(245, 245, 245),
        8px 8px 15px rgb(180, 180, 180);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        box-shadow: -8px -8px 15px rgba(245, 245, 245,0.6),
          8px 8px 15px rgba(180, 180, 180,0.6);
        outline: none;
      }
      &:active {
        box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
          inset -6px -6px 10px rgb(245, 245, 245);
        outline: none;
      }
    }
  }
}
</style>
