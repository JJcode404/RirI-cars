import Skeleton from '../ui/Skeleton'

export default function VehicleCardSkeleton() {
  return (
    <div className="bg-white border border-brand-border flex flex-col">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 flex flex-col items-center gap-2">
        <Skeleton className="h-4 w-2/3" />
        <div className="w-12 h-0.5 bg-brand-border my-1" />
        <Skeleton className="h-5 w-1/3" />
      </div>
      <div className="grid grid-cols-2 border-t border-brand-border bg-brand-low gap-px mt-auto">
        <Skeleton className="h-10 rounded-none" />
        <Skeleton className="h-10 rounded-none" />
      </div>
    </div>
  )
}
