# API

`http://nodetest.ct8.pl/`

| Method | Endpoint | Response | Description |
|---|---|---|---|
| GET | /servers | Array\<[Server](#types)\> | Returns a list of all servers. |
| GET | /servers/:serverId | [Server](#types) | Returns a server. |
| PUT | /servers/:serverId/on | [Server](#types) | Turns on a server |
| PUT | /servers/:serverId/off | [Server](#types) | Turns off a server |
| PUT | /servers/:serverId/reboot | [Server](#types) | Reboots a server |

#### Types
```typescript
interface Server {
    id: number;
    name: string;
    status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
}
```
