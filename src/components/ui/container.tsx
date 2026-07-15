import * as React from "react";


interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}



export const Container = React.forwardRef<
  HTMLDivElement,
  ContainerProps
>(
  (
    {
      children,
      className = "",
      ...props
    },
    ref
  ) => {

    return (

      <div

        ref={ref}

        className={`
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          sm:px-6
          lg:px-8
          ${className}
        `}

        {...props}

      >

        {children}

      </div>

    );

  }
);



Container.displayName =
  "Container";