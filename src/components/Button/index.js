import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    round = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = 'link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // remove eventlistener when button disabled
    if (disabled){
        Object.keys(props).forEach(key=> {
            if (key.startsWith('on') && typeof props[key]==='function'){
                delete props[key]
            }

        })
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        round,
        leftIcon,
        rightIcon,
        disabled
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon} </span>}
            <span className={cx('title')}> {children} </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon} </span>}
        </Comp>
    );
}

export default Button;
