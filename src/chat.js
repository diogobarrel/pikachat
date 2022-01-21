import store from "./store";
import chatService from "./services/chat-service";

export function getUserMessages(userId) {
    chatService.getMessages(userId)
}