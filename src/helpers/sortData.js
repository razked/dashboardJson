export const groupAndSumUnique = (arr, key) => {
    let grouped = arr.reduce((r, a) => {
        r[a[key]] = [...r[a[key]] || [], a];
        return r;
      }, {});

      let output = [];
      for (const typeKey in grouped) {
        output.push({
          type: typeKey,
          value: grouped[typeKey].length
        })
      }

      return output;
}