function shiftLeft(s, t) {
    let i = s.length, j = t.length;
    while (i >= 0 && j >= 0 && s[i] == t[j])
      i--, j--;
    return (i + 1) + (j + 1);
  }