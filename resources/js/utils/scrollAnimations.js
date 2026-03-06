let observer = null;
let staggerObserver = null;
let initialized = false;

const animationConfigs = {
    'fade-up': {
        initial: { opacity: 0, transform: 'translateY(30px)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-down': {
        initial: { opacity: 0, transform: 'translateY(-30px)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-left': {
        initial: { opacity: 0, transform: 'translateX(30px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'fade-right': {
        initial: { opacity: 0, transform: 'translateX(-30px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'zoom-in': {
        initial: { opacity: 0, transform: 'scale(0.8)' },
        animate: { opacity: 1, transform: 'scale(1)' }
    },
    'zoom-out': {
        initial: { opacity: 0, transform: 'scale(1.2)' },
        animate: { opacity: 1, transform: 'scale(1)' }
    },
    'slide-up': {
        initial: { opacity: 0, transform: 'translateY(50px)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade': {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    },
    'scale-up': {
        initial: { opacity: 0, transform: 'scale(0.9)' },
        animate: { opacity: 1, transform: 'scale(1)' }
    },
    'slide-in-left': {
        initial: { opacity: 0, transform: 'translateX(-60px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'slide-in-right': {
        initial: { opacity: 0, transform: 'translateX(60px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'blur-fade': {
        initial: { opacity: 0, filter: 'blur(8px)', transform: 'translateY(40px)' },
        animate: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }
    },
    'blur-scale': {
        initial: { opacity: 0, filter: 'blur(12px)', transform: 'scale(0.92)' },
        animate: { opacity: 1, filter: 'blur(0px)', transform: 'scale(1)' }
    },
    'reveal-up': {
        initial: { opacity: 0, transform: 'translateY(80px)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'tilt-in': {
        initial: { opacity: 0, transform: 'perspective(800px) rotateX(8deg) translateY(30px)' },
        animate: { opacity: 1, transform: 'perspective(800px) rotateX(0deg) translateY(0)' }
    },
    'float-up': {
        initial: { opacity: 0, transform: 'translateY(60px) scale(0.95)' },
        animate: { opacity: 1, transform: 'translateY(0) scale(1)' }
    },
    'slide-in-left-blur': {
        initial: { opacity: 0, transform: 'translateX(-40px)', filter: 'blur(6px)' },
        animate: { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' }
    },
    'slide-in-right-blur': {
        initial: { opacity: 0, transform: 'translateX(40px)', filter: 'blur(6px)' },
        animate: { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' }
    },
    'arc-rotate-right': {
        initial: { opacity: 0, transform: 'translateX(-50%) rotate(180deg)' },
        animate: { opacity: 1, transform: 'translateX(-50%) rotate(0deg)' }
    },
    'arc-rotate-left': {
        initial: { opacity: 0, transform: 'translateX(-50%) rotate(-180deg)' },
        animate: { opacity: 1, transform: 'translateX(-50%) rotate(0deg)' }
    },
    'slide-up-70': { initial: { opacity: 0, transform: 'translateY(70px) scale(0.92)' }, animate: { opacity: 1, transform: 'translateY(0) scale(1)' } },
    'slide-up-60': { initial: { opacity: 0, transform: 'translateY(60px) scale(0.95)' }, animate: { opacity: 1, transform: 'translateY(0) scale(1)' } },
    'slide-up-80': { initial: { opacity: 0, transform: 'translateY(80px) scale(0.92)' }, animate: { opacity: 1, transform: 'translateY(0) scale(1)' } },
    'slide-up-50': { initial: { opacity: 0, transform: 'translateY(50px) scale(0.93)' }, animate: { opacity: 1, transform: 'translateY(0) scale(1)' } },
    'slide-up-40': { initial: { opacity: 0, transform: 'translateY(40px)' }, animate: { opacity: 1, transform: 'translateY(0)' } },
    'slide-up-30': { initial: { opacity: 0, transform: 'translateY(30px)' }, animate: { opacity: 1, transform: 'translateY(0)' } },
    'slide-up-20': { initial: { opacity: 0, transform: 'translateY(20px)' }, animate: { opacity: 1, transform: 'translateY(0)' } },
    'slide-in-right-80': { initial: { opacity: 0, transform: 'translateX(80px)' }, animate: { opacity: 1, transform: 'translateX(0)' } },
    'slide-in-left-80': { initial: { opacity: 0, transform: 'translateX(-80px)' }, animate: { opacity: 1, transform: 'translateX(0)' } },
    'slide-in-right-40': { initial: { opacity: 0, transform: 'translateX(40px)' }, animate: { opacity: 1, transform: 'translateX(0)' } },
    'slide-in-left-40': { initial: { opacity: 0, transform: 'translateX(-40px)' }, animate: { opacity: 1, transform: 'translateX(0)' } },
    'scale-bounce': { initial: { opacity: 0, transform: 'scale(0.6)' }, animate: { opacity: 1, transform: 'scale(1)' } },
    'scale-y': { initial: { opacity: 0, transform: 'scaleY(0)' }, animate: { opacity: 1, transform: 'scaleY(1)' } },
    'trca-card': { initial: { opacity: 0, transform: 'translateY(80px) scale(0.9)' }, animate: { opacity: 1, transform: 'translateY(0) scale(1)' } },
    'tooltip-up': { initial: { opacity: 0, transform: 'translateY(-20px)' }, animate: { opacity: 1, transform: 'translateY(0)' } },
    'header-drop': { initial: { opacity: 0, transform: 'translateY(-60px)' }, animate: { opacity: 1, transform: 'translateY(0)' } },
};

const BLUR_ANIMATIONS = ['blur-fade', 'blur-scale', 'slide-in-left-blur', 'slide-in-right-blur'];
const TRANSFORM_KEEP_ANIMATIONS = ['arc-rotate-right', 'arc-rotate-left'];

function initScrollAnimations() {
    if (typeof window === 'undefined' || initialized) return;

    if (!document.getElementById('scroll-animations-style')) {
        const style = document.createElement('style');
        style.id = 'scroll-animations-style';
        style.textContent = `
            [data-scroll-animate] {
                transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                            filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                will-change: opacity, transform, filter;
            }
            [data-scroll-animate="arc-rotate-right"],
            [data-scroll-animate="arc-rotate-left"] {
                transform-origin: center bottom;
            }
            [data-scroll-animate="tilt-in"] {
                transform-origin: center bottom;
            }
        `;
        document.head.appendChild(style);
    }

    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const type = el.getAttribute('data-scroll-animate');
                        const delay = parseInt(el.getAttribute('data-scroll-delay') || '0');
                        const duration = parseFloat(el.getAttribute('data-scroll-duration') || '0.6');
                        const config = animationConfigs[type];

                        setTimeout(() => {
                            el.style.transitionDuration = `${duration}s`;

                            if (config?.animate) {
                                Object.entries(config.animate).forEach(([prop, val]) => {
                                    el.style[prop] = val;
                                });
                            }

                            el.classList.add('scroll-animated');
                        }, delay);

                        observer.unobserve(el);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -8% 0px',
                threshold: 0.05
            }
        );

        initStaggerObserver();
        initialized = true;
    }
}

function applyInitialStyles() {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll('[data-scroll-animate]');
    elements.forEach((el) => {
        const type = el.getAttribute('data-scroll-animate');
        const config = animationConfigs[type];

        if (config && !el.classList.contains('scroll-animated')) {
            Object.entries(config.initial).forEach(([prop, val]) => {
                el.style[prop] = val;
            });
        }
    });
}

function observeElements() {
    if (!observer || typeof window === 'undefined') return;

    const elements = document.querySelectorAll('[data-scroll-animate]:not(.scroll-animated)');
    elements.forEach((el) => {
        observer.observe(el);
    });

    if (staggerObserver) {
        document.querySelectorAll('[data-scroll-stagger]').forEach((c) => staggerObserver.observe(c));
    }
}

function initStaggerObserver() {
    if (!('IntersectionObserver' in window)) return;

    staggerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const container = entry.target;
                const stagger = parseFloat(container.getAttribute('data-scroll-stagger') || '0.12') * 1000;
                const childSelector = container.getAttribute('data-scroll-stagger-children') || '[data-scroll-animate]';
                const children = container.querySelectorAll(childSelector);
                const type = container.getAttribute('data-scroll-animate-type') || 'slide-up-70';
                const config = animationConfigs[type] || animationConfigs['slide-up-70'];

                children.forEach((el, i) => {
                    if (el.classList.contains('scroll-animated')) return;
                    Object.entries(config.initial).forEach(([prop, val]) => {
                        el.style[prop] = val;
                    });
                    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                    setTimeout(() => {
                        Object.entries(config.animate).forEach(([prop, val]) => {
                            el.style[prop] = val;
                        });
                        el.classList.add('scroll-animated');
                    }, i * stagger);
                });
                staggerObserver.unobserve(container);
            });
        },
        { rootMargin: '0px 0px -15% 0px', threshold: 0.05 }
    );
}

export function initScrollAnimationsSystem() {
    if (typeof window === 'undefined') return;
    initScrollAnimations();
    applyInitialStyles();
    requestAnimationFrame(() => {
        observeElements();
    });
}

export function runMountAnimations() {
    if (typeof window === 'undefined') return;
    document.querySelectorAll('[data-mount-animate]').forEach((el) => {
        const type = el.getAttribute('data-mount-animate');
        const config = animationConfigs[type];
        if (!config) return;
        Object.entries(config.initial).forEach(([prop, val]) => {
            el.style[prop] = val;
        });
        requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
            requestAnimationFrame(() => {
                Object.entries(config.animate).forEach(([prop, val]) => {
                    el.style[prop] = val;
                });
            });
        });
    });
}

export function refreshScrollAnimations() {
    if (typeof window === 'undefined') return;
    applyInitialStyles();
    observeElements();
}
