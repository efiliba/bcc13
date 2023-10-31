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

export const RequestSent = ({ open, onClose }: Props) =>
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="bg-text">
      <DialogHeader>
        <DialogTitle className="mb-2">We&apos;ve received your message.</DialogTitle>
        <DialogDescription>
          Thanks for contacting us, we&apos;ll get back to you within 24 hours.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary" onClick={onClose}>Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
