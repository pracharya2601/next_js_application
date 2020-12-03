
import grid_style from './grid.module.css'

const Grid = ({container, children, gap}) => {
    const grid_gap = gap ? `gap_${gap}` : null;
    const element = container ? (
        <aside className={[grid_style.grid_container, grid_style[`${grid_gap}`], ].join(' ')}>
            {children && children.map((child, index) => {
                const {sm, md, lg} = child.props;
                const small = sm ? `sm_${sm}` : "sm_12";
                const mid = md ? `md_${md}` : small;
                const large = lg ? `lg_${lg}` : mid;

                return (
                    child && (
                        <div
                            className={[
                                grid_style.grid_item,
                                grid_style[`${small}`],
                                grid_style[`${mid}`],
                                grid_style[`${large}`],
                                grid_style[`${grid_gap}`],
                            ].join(" ")}
                            key={index}
                        >
                            {child.props.children}
                        </div>
                    )
                )


            })}
        </aside>
    ) : (
        <>{children} </>
    )

    return element;
}

export default Grid;