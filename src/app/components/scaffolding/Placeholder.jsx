import Image from 'next/image';
import { StyledButton } from '../../registry/new-york/ui/StyledButton';

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

        <StyledButton
          size="sm"
          className="relative w-1/4 text-wrap p-4"
          onClick={handleClick}
        >
          Visit - {item.name}
        </StyledButton>
      </div>
    </div>
  );
}
