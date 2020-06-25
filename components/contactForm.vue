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
        box-shadow: -8px -8px 15px rgb(240, 255, 250),
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
      margin-top: 16px;
      padding: 8px;
      width: 200px;
      background: rgb(230, 230, 230);
      border-radius: 25px;
      font-weight: bold;
      box-shadow: -8px -8px 15px rgb(240, 255, 250),
        8px 8px 15px rgb(180, 180, 180);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      font-weight: 600;
      text-shadow: 0.7px 0.7px 1px rgb(50, 255, 250);
      &:hover {
        box-shadow: inset -5px -5px 10px rgb(240, 255, 250),
          inset 5px 5px 10px rgb(200, 200, 200);
        outline: none;
      }
      &:active {
        box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
          inset -6px -6px 10px rgb(245, 245, 245);
        outline: none;
      }
      svg {
        filter: drop-shadow(0.7px 0.7px 1px rgb(50, 255, 250));
      }
    }
  }
}
</style>
