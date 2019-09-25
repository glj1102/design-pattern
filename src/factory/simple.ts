import { Sender, MailSender, SmsSender } from "./base";

// factory

class SendFactory {
    public produce(type: string): Sender {
        if ("mail" === type) {
            return new MailSender();
        }
        else if("sms" === type){
            return new SmsSender();
        }
        else {
            throw new Error("type invalid");
        }
    }

    // 多个方法
    public produceMail(): MailSender {
        return new MailSender();
    }

    public produceSms(): SmsSender {
        return new SmsSender();
    }

    // 多个静态方法
    public static produceMail(): MailSender {
        return new MailSender();
    }

    public static produceSms(): SmsSender {
        return new SmsSender();
    }

}

{
    const factory = new SendFactory();
    const sender = factory.produce("mail");
    // const sender = factory.produceMail();
    // const sender = SendFactory.produceMail();
    sender.send();
}