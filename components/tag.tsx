export function Tag({ tag }: { tag: string }) {
  return (
    <span className="text-xs inline-flex px-3 bg-slate-100 dark:bg-slate-500 dark:text-slate-50 rounded-full leading-7 text-slate-700 tracking-wide">
      {tag}
    </span>
  );
}
