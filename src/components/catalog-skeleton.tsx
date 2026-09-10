import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CatalogSkeletonGridProps {
  /** Number of skeleton cards to render. Defaults to 6 (one full desktop row-pair). */
  count?: number;
  /** Accessible label announced while content loads. */
  label?: string;
  /** Extra classes merged onto the grid container. */
  className?: string;
}

function CatalogSkeletonCard() {
  return (
    <Card
      aria-hidden="true"
      className="flex h-full flex-col overflow-hidden border-l-4 border-primary/10 bg-card/70 backdrop-blur-sm"
    >
      <CardHeader className="pb-2">
        <div className="mb-2 flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-2">
        <div className="flex flex-wrap gap-1">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </CardFooter>
    </Card>
  );
}

export function CatalogSkeletonGrid({ count = 6, label = 'Loading…', className }: CatalogSkeletonGridProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label={label}
      className={cn('mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3', className)}
    >
      <span className="sr-only">{label}</span>
      {Array.from({ length: count }, (_, index) => (
        <CatalogSkeletonCard key={index} />
      ))}
    </div>
  );
}
