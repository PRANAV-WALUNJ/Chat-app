using ChatAPI.DataServer;
using ChatAPI.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatAPI.Hubs
{
    public class ChatHub : Hub
    {

        private readonly SharedDb _sharedDb;
        public ChatHub(SharedDb sharedDb)
        {
            _sharedDb = sharedDb;
        }
        public async Task JoinChat(UserConnection connection)
        {
            await Clients.All.SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{connection.UserName} has joined");
        }

        public async Task JoinSpecificChatRoom(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName: connection.ChatRoom);

            _sharedDb.conncections[Context.ConnectionId]=connection;

            await Clients.Groups(connection.ChatRoom).SendAsync(method: "ReceiveMessage", arg1: "admin", arg2: $"{connection.UserName} has joined {connection.ChatRoom}");
        }

        public async Task SendMessage(string msg)
        {
            if (_sharedDb.conncections.TryGetValue(Context.ConnectionId, out UserConnection connection))
            {
                await Clients.Groups(connection.ChatRoom).SendAsync(method: "ReceiveSpecificMessage", arg1: connection.UserName, arg2: msg);
            }

        }
    }
}
