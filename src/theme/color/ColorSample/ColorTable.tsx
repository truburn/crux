import { useMemo } from "react";
import { cx } from "@emotion/css";
import { ColorItem, useColorSampleClasses } from "@/theme/color/ColorSample";

export function ColorTable(props: ColorItem) {
  const classes = useColorSampleClasses();

  const variations = useMemo<Omit<ColorItem, "variations">[]>(() => {
    return props.variations.filter(({ name }) => name !== "border");
  }, [props.variations]);

  const borderColor = useMemo<string>(() => {
    return (
      props.variations.find(({ name }) => name === "border")?.color || "initial"
    );
  }, [props.variations]);

  const getCellID = (
    color: Omit<ColorItem, "variations">,
    type: string
  ): string => {
    return [props.name, color.name, color.color, type].join("-");
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <td />
          <td />
          <th className={classes.tableColumnGroup} colSpan={variations.length}>
            Text Color
          </th>
        </tr>
        <tr>
          <td />
          <td />
          {variations.map((color) => {
            const cellID = getCellID(color, "text");
            return (
              <th key={cellID} id={cellID} className={classes.tableHeader}>
                {color.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {variations.map((color, idx) => {
          const cellID = getCellID(color, "background");
          return (
            <tr key={cellID}>
              {idx === 0 && (
                <th
                  rowSpan={variations.length}
                  className={classes.tableRowGroup}
                >
                  <div>Background Color</div>
                </th>
              )}
              <th
                id={cellID}
                className={cx(classes.tableHeader, classes.tableRowHeader)}
              >
                <div>{color.name}</div>
              </th>
              {variations.map((variant) => (
                <td
                  key={`${cellID}-text-${variant.name}`}
                  className={classes.tableCell}
                >
                  <div
                    className={classes.info}
                    style={{
                      background: color.color,
                      borderColor,
                    }}
                  >
                    <span style={{ color: "black" }}>Black Text</span>
                    <span style={{ color: "white" }}>White Text</span>
                    <span
                      style={{ color: variant.color }}
                    >{`${variant.name} Text`}</span>
                  </div>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
