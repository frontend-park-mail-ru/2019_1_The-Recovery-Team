type GetterCallback = (type: string, payload: string) => any;
type Sender = (action: string) => any;
type OfflineEngine = (getter: GetterCallback) => Sender;
