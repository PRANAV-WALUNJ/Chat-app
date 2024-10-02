using ChatAPI.Models;
using System.Collections.Concurrent;

namespace ChatAPI.DataServer
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _conncections = new();

        public ConcurrentDictionary<string, UserConnection> conncections => _conncections;

    }
}
