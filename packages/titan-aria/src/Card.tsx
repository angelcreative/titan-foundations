import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Main content of the card */
  children?: React.ReactNode;
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`titan-Card ${className}`.trim()}
      data-slot="card"
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`titan-Card-header ${className}`.trim()} {...props}>
      <div className="titan-Card-title">{title}</div>
      {subtitle != null && <div className="titan-Card-subtitle">{subtitle}</div>}
    </div>
  );
}

export function CardBody({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`titan-Card-body ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardActions({ children, className = '', ...props }: CardActionsProps) {
  return (
    <div className={`titan-Card-actions ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;
