'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../lib/utils';

const StyledTabs = TabsPrimitive.Root;

const StyledTabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-color_1',
      className
    )}
    {...props}
  />
));
StyledTabsList.displayName = TabsPrimitive.List.displayName;

const StyledTabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-color_1 data-[state=active]:shadow',
      className
    )}
    {...props}
  />
));
StyledTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const StyledTabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
StyledTabsContent.displayName = TabsPrimitive.Content.displayName;

export { StyledTabs, StyledTabsList, StyledTabsTrigger, StyledTabsContent };
