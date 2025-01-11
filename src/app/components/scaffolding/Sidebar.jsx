import { cn } from './../../lib/utils';
import SidebarOptions from './SidebarOptions';

export function Sidebar({ className }) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4 text-color_4">
        <SidebarOptions title={'mens'} />
        <SidebarOptions title={'womens'} />
        {/* <SidebarOptions title={'kids'} /> */}
      </div>
    </div>
  );
}
