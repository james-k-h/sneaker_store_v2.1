import Image from 'next/image';
import { Button } from '../../registry/new-york/ui/StyledButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../registry/new-york/ui/dialog';
import { Input } from '../../registry/new-york/ui/input';
import { Label } from '../../registry/new-york/ui/label';

export function SneakerNewArrivals({ recentArrival }) {
  function handleClick() {
    window.location.href = `/${item.redirect}/${item._id}`;
  }
  let item = recentArrival[0];
  return (
    <div className="flex h-6/8 shrink-0 items-center justify-center rounded-md border border-dashed">
      <div
        className="mx-auto flex 
      
      flex-col items-center justify-center text-center"
      >
        {/* <h3 className="mt-4 text-lg font-semibold">No episodes added</h3> */}
        <Image
          src={item.image}
          height={600}
          width={800}
          alt={item.name}
          className="rounded-lg border-2 border-color_1 object-fill"
          onClick={handleClick}
        />
        {/* <button onClick={handleClick}>testing</button> */}
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Click below for more information
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative w-1/4 text-wrap p-4">
              Visit - {item.name}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Podcast</DialogTitle>
              <DialogDescription>
                Copy and paste the podcast feed URL to import.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Podcast URL</Label>
                <Input id="url" placeholder="https://example.com/feed.xml" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleClick}></Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
