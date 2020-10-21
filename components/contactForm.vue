<template>
  <div class="input-area">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label for="name">
        <v-icon color="black" class="mx-2">mdi-account</v-icon>
        <input name="name" type="text" placeholder=" Your Name..." required />
      </label>
      <label for="email">
        <v-icon color="black" class="mx-2">mdi-email</v-icon>
        <input name="email" type="text" placeholder=" abc@gmail.com" required />
      </label>
      <label for="textarea">
        <v-icon color="black" class="mx-2 mt-2 d-flex align-start">mdi-comment</v-icon>
        <textarea name="textarea" cols="30" rows="10" placeholder=" Your message..."></textarea>
      </label>
      <button value="Send" type="submit">
        Send
        <v-icon color="black">mdi-send</v-icon>
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
  position: relative;
  padding: 24px;
  form {
    label {
      display: flex;
      margin: 0 auto;
      margin-bottom: 16px;
      padding: 1px;
      border-radius: 25px;
      box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
        inset -6px -6px 10px rgb(245, 245, 245);
      width: 100%;
      box-sizing: border-box;
      transition: all 0.2s ease-in-out;
      appearance: none;
      -webkit-appearance: none;
      @media (max-width: (768px)) {
          width: 90%;
        }
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
    }
  }
}
</style>
