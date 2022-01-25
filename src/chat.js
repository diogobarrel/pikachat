import store from "./store";
import chatService from "./services/chat-service";

export function sendMessage(userId) {
    chatService.getMessages(userId)
}