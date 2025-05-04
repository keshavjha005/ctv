
import { useState } from "react";
import { useSubscriptionContext } from "@/context/SubscriptionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { toast } from "sonner";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { subscribe, isSubscribed } = useSubscriptionContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!name) {
      toast.error("Please enter your name");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (isSubscribed(email)) {
      toast.error("This email is already subscribed");
      return;
    }

    subscribe(email, name);
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white/10 text-white placeholder:text-white/50"
      />
      <div className="flex">
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 text-white placeholder:text-white/50"
        />
        <Button type="submit" className="ml-2 bg-club-primary text-white hover:bg-club-secondary">
          <Bell className="mr-2 h-4 w-4" />
          Subscribe
        </Button>
      </div>
      <p className="text-xs opacity-70">
        We'll never share your email with anyone else.
      </p>
    </form>
  );
};
