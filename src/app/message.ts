export class Message {
    public invite_id:number;
    public sender_id: string;
    public sig_id: number;
    public invite: string;
    public vector: string;
    public invite_time: number;
    public status: string;
    
    constructor(msg){
        this.invite_id   = msg.invite_id 
        this.sender_id   = msg.sender_id
        this.sig_id      = msg.sig_id
        this.invite      = msg.invite
        this.vector      = msg.vector
        this.invite_time = msg.invite_time
        this.status      = msg.status 
    }

    isRead(){
        return this.status === 'read';
    }

    setRead(){
        this.status = 'read';
    }

}


