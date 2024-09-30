using ChatAPI.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatAPI.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnection connection)
        {
            await Clients.All.SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{connection.UserName} has joined");
        }

        public async Task JoinSpecificChatRoom(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName: connection.ChatRoom);
            await Clients.Groups(connection.ChatRoom).SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{connection.UserName} has joined {connection.ChatRoom}");
        }

    }
}
