export const mapObjectToComponent = (dataArray:object[], Component:React.ElementType): JSX.Element[] => {
    return dataArray.map((data, index) => (
        <Component key={index} {...data} />
    ));
};

