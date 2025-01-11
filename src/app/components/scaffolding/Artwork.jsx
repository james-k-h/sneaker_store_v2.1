import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../../registry/new-york/ui/context-menu';

import { cn } from './../../lib/utils';

export function PopularSneakers({
  sneaker,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}) {
  function handleClick() {
    window.location.href = `/${sneaker.redirect}/${sneaker._id}`;
  }
  return (
    <div
      className={cn('space-y-3', className)}
      {...props}
      onClick={handleClick}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={sneaker.image}
              alt={sneaker.name}
              width={sneaker.imageWidth}
              height={sneaker.imageHeight}
              className={cn(
                'h-auto w-auto object-fill transition-all hover:scale-105'
                // aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </div>
        </ContextMenuTrigger>
        {/* <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent> */}
      </ContextMenu>
      {/* <Link > */}
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{sneaker.name}</h3>
        <p className="text-xs text-muted-foreground">{sneaker.artist}</p>
        <p className="text-xs text-muted-foreground">{sneaker.brand}</p>
      </div>
      {/* </Link> */}
    </div>
  );
}
