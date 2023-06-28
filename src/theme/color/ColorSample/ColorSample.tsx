import { useMemo } from "react";
import {
  ColorSampleProps,
  ColorItem,
  useColorSampleClasses,
  ColorTable,
} from "@/theme/color/ColorSample";
import { ColorNames } from "@/theme/color";
import { theme } from "@/theme/themeStyles";
import { Heading } from "@/typography/Heading";

/**
 * Renders a theme color in multiple variations for use in Storybook MDX stories
 */
export function ColorSample(props: ColorSampleProps) {
  const { colorList, showDetails, mainColorsOnly } = props;
  const classes = useColorSampleClasses();

  const colors = useMemo<ColorItem[]>(() => {
    return Object.entries(theme.colors)
      .filter(([name]) => {
        if (!colorList) return true;
        return colorList.includes(name as ColorNames);
      })
      .map(([name, color]) => {
        const childColors = Object.entries(color)
          .filter(([colorName]) => colorName !== "chromaColor")
          .map(([colorName, colorHex]) => ({
            name: colorName,
            color: colorHex,
          }));

        return {
          name,
          color: color.main,
          variations: childColors,
        };
      });
  }, [colorList]);

  return (
    <div className={classes.root}>
      <div className={classes.colorBlocks}>
        {colors.map((color) => (
          <div key={color.name} className={classes.block}>
            <div
              className={classes.blockColor}
              style={{ background: color.color }}
            />
            <div className={classes.blockInfo}>
              <span>{color.name}</span>
              <span>{color.color}</span>
            </div>
          </div>
        ))}
      </div>
      {!mainColorsOnly &&
        colors.map((color) => (
          <div key={color.name} className={classes.item}>
            <Heading
              title={color.name}
              subtitle={
                <>
                  {color.color}
                  <div
                    className={classes.subtitleColorBlock}
                    style={{ background: color.color }}
                  />
                </>
              }
              classes={{
                root: classes.itemHeading,
                title: classes.title,
                subtitle: classes.subtitle,
              }}
            />
            <p
              className={classes.variable}
            >{`theme.colors.${color.name}.{VARIATION}`}</p>
            <div className={classes.colorBlocks}>
              {color.variations.map((variation) => (
                <div
                  key={[color.name, variation.name].join("-")}
                  className={classes.block}
                >
                  <div
                    className={classes.blockColor}
                    style={{ background: variation.color }}
                  />
                  <div className={classes.blockInfo}>
                    <span>{variation.name}</span>
                    <span>{variation.color}</span>
                  </div>
                </div>
              ))}
            </div>
            {showDetails && <ColorTable {...color} />}
          </div>
        ))}
    </div>
  );
}
