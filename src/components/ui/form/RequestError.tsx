import Link from 'next/link';

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/Dialog";

interface Props {
  open: boolean;
  onClose(): void;
}

export const RequestError = ({ open, onClose }: Props) =>
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="bg-text">
      <DialogHeader>
        <DialogTitle className="mb-2">Sorry, something went wrong.</DialogTitle>
        <DialogDescription>
          Please email us at: <a href = "mailto: abc@example.com">admin@bestchoicecare.com.au</a><br />
          or call us on: <Link href="tel:1300 711 380">1300 711 380</Link>.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary" onClick={onClose}>Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
