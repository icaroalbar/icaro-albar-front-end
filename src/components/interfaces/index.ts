import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconProps {
    icon: ReactNode
}

interface LinkProps {
    href: string
}

export interface NavProps extends LinkProps {
    label: string
}

export interface LinkSocialMediaProps extends LinkProps, IconProps {}

export interface StackProps extends IconProps {
    stack: string
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    disableTitle?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
}