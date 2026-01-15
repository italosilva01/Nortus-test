import { cn } from '@/shared/lib/utils';
import { CardContent, CardHeader, CardTitle } from '../card';
import { Panel } from './Panel';
import { Typography } from './Typography';

interface PanelBigProps {
  title: string;
  classNameTitle?: string;
  children: React.ReactNode;
  filtersChildren?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const PanelBig = ({
  classNameTitle,
  title,
  children,
  filtersChildren,
  className,
  contentClassName,
}: PanelBigProps) => {
  return (
    <Panel
      className={cn(
        'py-0 w-full h-full flex flex-col max-w-[680px] xl:max-w-[780px] 2xl:max-w-[852px]',
        className
      )}
    >
      <CardHeader className="flex pt-6 px-4 lg:px-6">
        <CardTitle className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between w-full">
          <Typography
            fontFamily="montserrat"
            fontWeight="normal"
            className={cn(
              'text-xl lg:text-2xl font-bold truncate',
              classNameTitle
            )}
            fontColor="surface-solid"
          >
            {title}
          </Typography>
          {filtersChildren}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          'flex flex-col px-4 lg:px-6 flex-1 w-full h-full',
          contentClassName
        )}
      >
        {children}
      </CardContent>
    </Panel>
  );
};
