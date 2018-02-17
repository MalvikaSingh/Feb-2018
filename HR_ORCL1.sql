create or replace PROCEDURE getUSERByUserInput(
       p_country IN FILTERUSER.COUNTRY%TYPE,
       p_app IN FILTERUSER.APPLICATION%TYPE,
       p_year IN FILTERUSER.YEAR%TYPE, p_emp_refcur IN OUT SYS_REFCURSOR
)
IS
   o_userid EXTRACTS.USERID%TYPE;
   o_username EXTRACTS.USERNAME%TYPE;
   o_creationdate EXTRACTS.CREATIONDATE%TYPE;
   o_lastlogindate EXTRACTS.LASTLOGINDATE%TYPE;
   o_lastlogintime EXTRACTS.LASTLOGINTIME%TYPE;
   o_country EXTRACTS.COUNTRY%TYPE;
   o_application EXTRACTS.APPLICATION%TYPE;
   o_year EXTRACTS.YEAR%TYPE;
   o_month EXTRACTS.YEAR%TYPE;
   v_emp_refcur  SYS_REFCURSOR;

BEGIN
    OPEN p_emp_refcur FOR SELECT USERNAME ,USERID ,CREATIONDATE ,LASTLOGINDATE ,LASTLOGINTIME ,COUNTRY ,APPLICATION ,YEAR ,MONTH INTO o_username,o_userid, o_creationdate,  o_lastlogindate, o_lastlogintime,o_country,o_application,o_year,o_month FROM Extracts WHERE COUNTRY = p_country AND APPLICATION=p_app AND YEAR=p_year
    AND USERNAME=(SELECT USERNAME FROM FILTERUSER WHERE COUNTRY=p_country AND APPLICATION=p_app AND YEAR=p_year);
   DBMS_OUTPUT.PUT_LINE('USERNAME  CRDATE  LLDATE  LLTIME  COUNTRY  APPLICATION '|| o_year);
   DBMS_OUTPUT.PUT_LINE('-----    -------');
   getUSERByUserInput('India','INB','2017', v_emp_refcur);
    LOOP
        FETCH v_emp_refcur INTO o_username, o_creationdate,o_lastlogindate,o_lastlogintime,o_country,o_application,o_year,o_month;
        EXIT WHEN v_emp_refcur%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(o_username || '     ' || o_creationdate || '     ' || o_lastlogindate || '     ' || o_lastlogintime || '     ' || o_country || '     ' ||o_application || '     ' ||o_year || '     ' ||o_month);
    END LOOP;
    CLOSE v_emp_refcur;
END;
