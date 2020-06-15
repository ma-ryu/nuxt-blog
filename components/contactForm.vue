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
      border: 1.2px solid gray;
      border-radius: 4px;
      input {
        width: 500px;
        height: 32px;
        border: none;
        background: #ddd;
        &:focus {
          outline: none;
        }
        &:valid {
          background-color: #ddd;
        }
        @media (max-width: (768px)) {
          width: 300px;
        }
      }
      textarea {
        width: 500px;
        border: none;
        background: #ddd;
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
      border: 1.2px solid gray;
      border-radius: 4px;
    }
  }
}
</style>
