class UserMessage {
    constructor(data) {
      this.email = data.email;
      this.name = data.name;
      this.message = data.message;
      this.pending = true;
    }
  }

export default UserMessage;
