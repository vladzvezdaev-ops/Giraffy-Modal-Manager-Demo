type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: any;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;
  return <div>{children}</div>;
}

export function DialogOverlay(props: { children?: any; [key: string]: any }) {
  const { children, ...rest } = props;
  return (
    <div className="giraffy-dialog-overlay" {...rest}>
      {children}
    </div>
  );
}

type DialogContentProps = {
  children?: any;
  showCloseButton?: boolean;
  onPointerDownOutside?: (e: any) => void;
  onEscapeKeyDown?: (e: any) => void;
  [key: string]: any;
};

export function DialogContent({
  children,
  onPointerDownOutside,
  onEscapeKeyDown,
  ...rest
}: DialogContentProps) {
  return (
    <div
      className="giraffy-dialog-content"
      onMouseDown={(e: any) => e.stopPropagation()}
      {...rest}
    >
      {children}
    </div>
  );
}

export function DialogHeader(props: { children?: any; [key: string]: any }) {
  const { children, ...rest } = props;
  return (
    <div className="giraffy-dialog-header" {...rest}>
      {children}
    </div>
  );
}

export function DialogTitle(props: { children?: any; [key: string]: any }) {
  const { children, ...rest } = props;
  return (
    <h2 className="giraffy-dialog-title" {...rest}>
      {children}
    </h2>
  );
}

export function DialogDescription(props: {
  children?: any;
  [key: string]: any;
}) {
  const { children, ...rest } = props;
  return (
    <p className="giraffy-dialog-description" {...rest}>
      {children}
    </p>
  );
}

export default Dialog;
